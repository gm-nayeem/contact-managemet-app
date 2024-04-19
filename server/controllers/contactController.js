const { z } = require('zod');
const createError = require('http-errors');

const Contact = require('../model/Contact');
const { successResponse } = require('./responseController');

const ContactSchema = z.object({
    name: z.string(),
    email: z.string().optional(),
    phone: z.string(),
    address: z.string(),
    profilePicture: z.string(),
});


const createContact = async (req, res, next) => {
    try {
        const validatedContact = ContactSchema.parse(req.body);

        const newContact = await Contact.create(validatedContact);

        return successResponse(res, {
            statusCode: 201,
            message: 'Contact created successfully',
            payload: newContact
        });
    } catch (err) {
        if (err instanceof z.ZodError) {
            createError(400, 'Input validation failed!');
        } else {
            next(err);
        }
    }
}

const updateContact = async (req, res, next) => {
    try {
        const id = req.params.id;

        const contact = await Contact.findById(id);

        const mainContact = contact._doc;

        const updateContact = {
            ...mainContact,
            ...req.body
        };

        const updatedContact = await Contact.findByIdAndUpdate(
            id,
            {
                $set: updateContact,
            },
            { new: true }
        );

        return successResponse(res, {
            statusCode: 200,
            message: 'Contact updated successfully',
            payload: updatedContact
        });
    } catch (err) {
        next(err);
    }
};

const deleteContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const contact = await Contact.findByIdAndDelete(id);

        return successResponse(res, {
            statusCode: 200,
            message: 'Contact deleted successfully',
            payload: contact
        });
    } catch (err) {
        next(err);
    }
};

const getSingleContact = async (req, res, next) => {
    try {
        const id = req.params.id;
        const contact = await Contact.findById(id);

        return successResponse(res, {
            statusCode: 200,
            message: 'Get single contact',
            payload: contact
        });
    } catch (err) {
        next(err);
    }
};

const getAllContact = async (req, res, next) => {
    try {
        const contacts = await Contact.find();

        return successResponse(res, {
            statusCode: 200,
            message: 'Get all contacts',
            payload: contacts
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createContact,
    updateContact,
    deleteContact,
    getSingleContact,
    getAllContact
}