import {
  createUsersService,
  deleteUsersService,
  getAllUsersService,
  getUserByIdService,
  updateUsersService,
} from "../models/userModel.js";

//Standarized response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUsersService(name, email);
    handleResponse(res, 201, "User Created Successfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "Users Fetched Successfully", users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user) return handleResponse(res, 404, "User Not Found");
    handleResponse(res, 200, "User Fetched Successfully", user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const user = await updateUsersService(req.params.id, name, email);
    if(!user){
        return handleResponse(res,404,"User Not Found");
    }
    handleResponse(res, 200, "User Updated Successfully", user);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
    try {
      const user = await deleteUsersService(req.params.id);
      if(!user){
          return handleResponse(res,404,"User Not Found");
      }
      handleResponse(res, 200, "User Deleted Successfully", user);
    } catch (err) {
      next(err);
    }
  };
  