import Property from "../models/properties.js";

// Add a new property (renamed to createProperty)
export const createProperty = async (req, res, next) => {
    try {
        const { name, description, location, price, image, rating } = req.body;
        const newProperty = new Property({
            name,
            description,
            location,
            price,
            image,
            rating,
        });
        const createdProperty = await newProperty.save();
        res.status(201).json(createdProperty);
    } catch (err) {
        next(err);
    }
};

// Get all properties
export const getProperties = async (req, res, next) => {
    try {
        const { search } = req.query;
        const filter = {};
        if (search) {
            filter.$or = [
                { name: { $regex: new RegExp(search, "i") } },
                { description: { $regex: new RegExp(search, "i") } },
                { location: { $regex: new RegExp(search, "i") } },
            ];
        }
        const propertiesList = await Property.find(filter);
        res.status(200).json(propertiesList);
    } catch (err) {
        next(err);
    }
};

// Get property details by ID
export const getProperty = async (req, res, next) => {
    try {
        const { id } = req.params;
        const property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }
        res.status(200).json(property);
    } catch (err) {
        next(err);
    }
};

// Update a property by ID
export const updateProperty = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedProperty = await Property.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProperty) {
            return res.status(404).json({ message: "Property not found" });
        }
        res.status(200).json(updatedProperty);
    } catch (err) {
        next(err);
    }
};

// Delete a property by ID
export const deleteProperty = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProperty = await Property.findByIdAndDelete(id);
        if (!deletedProperty) {
            return res.status(404).json({ message: "Property not found" });
        }
        res.status(200).json({ message: "Property deleted successfully" });
    } catch (err) {
        next(err);
    }
};
