import express from 'express';
import {
    AddToFavorite,
    getFavoritedProperties,
    RemoveFromFavorites,
    signup,
    signIn,
    BookProperty,
    getBookedProperties,
} from '../controllers/user.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signIn);
router.post('/addtofavorites', verifyToken, AddToFavorite);
router.get('/getuserfavorites', verifyToken, getFavoritedProperties);
router.post('/removefromfavorites', verifyToken, RemoveFromFavorites);
router.post('/bookproperty', verifyToken, BookProperty);
router.get('/getbookedproperties', verifyToken, getBookedProperties);

export default router;