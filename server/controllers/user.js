import user from '../models/user.js';
import properties from '../models/properties.js';
import { createError } from '../error.js';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

export const signup = async (req, res, next) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            throw createError(409, 'User already exists');
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = new user({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });
        const createdUser = await newUser.save();
        const token = jwt.sign({ userId: createdUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(201).json({ user: createdUser, token });
    } catch (error) {
        next(error);
    }
};

export const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            throw createError(404, 'User does not exist');
        }
        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        if (!isPasswordCorrect) {
            throw createError(401, 'Invalid credentials');
        }
        const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ user: existingUser, token });
    } catch (error) {
        next(error);
    }
};

export const BookProperty = async (req, res, next) => {
    try {
        const { propertyId } = req.body;
        const property = await properties.findById(propertyId);
        if (!property) {
            throw createError(404, 'Property not found');
        }
        const currentUser = req.user;
        if (currentUser.bookedProperties.includes(propertyId)) {
            throw createError(409, 'Property already booked');
        }

        currentUser.bookedProperties.push(propertyId);
        await currentUser.save();

        res.json({ message: 'Property booked successfully' });
    } catch (error) {
        next(error);
    }
};

export const getBookedProperties = async (req, res, next) => {
    try {
        const currentUser = req.user;
        const userWithBookings = await user.findById(currentUser._id).populate({ path: "bookings", model: "properties" });
        const properties = await properties.find({ _id: { $in: userWithBookings.bookedProperties } });

        res.json({ properties });
    } catch (error) {
        next(error);
    }
};

export const AddToFavorite = async (req, res, next) => {
    try {
        const { propertyId } = req.body;
        const userjwt = req.user;
        const currentUser = await user.findById(userjwt._id);
        if (!currentUser.favoriteProperties.includes(propertyId)) {
            currentUser.favoriteProperties.push(propertyId);
            await currentUser.save();
            return res.status(201).json({ message: 'Property added to favorites successfully' });
        } else {
            throw createError(409, 'Property already in favorites');
        }
    } catch (err) {
        next(err);
    }
};

export const RemoveFromFavorites = async (req, res, next) => {
    try {
        const { propertyId } = req.body;
        const userjwt = req.user;
        const currentUser = await user.findById(userjwt._id);
        currentUser.favoriteProperties = currentUser.favoriteProperties.filter((id) => id !== propertyId);
        await currentUser.save();

        return res.status(201).json({ message: 'Property removed from favorites successfully' });
    } catch (err) {
        next(err);
    }
};

export const getFavoritedProperties = async (req, res, next) => {
    try {
        const userjwt = req.user;
        const currentUser = await user.findById(userjwt._id).populate({ path: "favoriteProperties", model: "properties" });
        const properties = await properties.find({ _id: { $in: currentUser.favoriteProperties } });

        return res.status(200).json({ properties });
    } catch (error) {
        next(error);
    }
};