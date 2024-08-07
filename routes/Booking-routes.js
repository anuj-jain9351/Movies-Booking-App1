import express from 'express';
import { getBookingById, newBooking } from '../controllers/booking-controller';

const  bookingRouter = express.Router();

bookingRouter.get('/:id',getBookingById);
bookingRouter.post('/',newBooking);
bookingRouter.delete('/:id',);

export default bookingRouter;