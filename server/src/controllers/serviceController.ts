import { Request, Response } from "express";
import Service from "../models/Service";
import cloudinaryInstance from "../config/cloudinary";
import fs from "fs";


// Create Service
export const createService = async (req: Request, res: Response) => {
  try {
    const { title, category, branch } = req.body;
    const file = (req as any).file;

    console.log("BODY:", req.body);
    console.log("FILE:", file);

    // ✅ validation
    if (!title || !category || !branch || !file) {
      return res.status(400).json({
        message: "Title, category, branch and image are required",
      });
    }

    // ✅ Upload to Cloudinary
    const uploadResult = await cloudinaryInstance.uploader.upload(file.path, {
      folder: "services",
    });

    console.log("Uploaded File:", uploadResult);

    // ✅ delete local file
    fs.unlinkSync(file.path);

    const service = await Service.create({
      title,
      category,
      branch,
      image: uploadResult.secure_url,
    });

    res.status(201).json({
      message: "Service created successfully",
      service,
    });
  } catch (error: any) {
    console.error("CREATE SERVICE ERROR:", error);

    res.status(500).json({
      message: "Create failed",
      error: error.message || error,
    });
  }
};


// Update service
export const updateService = async (req: Request, res: Response) => {
  try {
    const { serviceId } = req.params;
    const { title, category, branch } = req.body;
    const file = (req as any).file;

    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    // ✅ Update fields
    if (title !== undefined) service.title = title;
    if (category !== undefined) service.category = category;
    if (branch !== undefined) service.branch = branch;

    // ✅ Upload new image
    if (file) {
      const uploadResult = await cloudinaryInstance.uploader.upload(
        file.path,
        { folder: "services" }
      );

      console.log("Cloudinary Upload:", uploadResult);

      service.image = uploadResult.secure_url;

      // delete local file
      fs.unlinkSync(file.path);
    }

    await service.save();

    res.status(200).json({
      message: "Service updated successfully",
      service,
    });
  } catch (error: any) {
    console.error("UPDATE SERVICE ERROR:", error);

    res.status(500).json({
      message: "Update failed",
      error: error.message || error,
    });
  }
};

//Delete Service
export const deleteService = async (req: Request, res: Response) => {
  try {
    const { serviceId } = req.params;

    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    await Service.findByIdAndDelete(serviceId);

    res.status(200).json({
      message: "Service deleted successfully",
    });
  } catch (error: any) {
    console.error("DELETE SERVICE ERROR:", error);

    res.status(500).json({
      message: "Delete failed",
      error: error.message || error,
    });
  }
};



//Get All Services
export const getAllService = async (req: Request, res: Response) => {
  try {
    const services = await Service.find();

    res.status(200).json({
      message: "All services fetched successfully",
      services,
    });
  } catch (error: any) {
    console.error("GET ALL SERVICE ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch services",
      error: error.message || error,
    });
  }
};



// export const uploadProfileImage = async (req: Request, res: Response) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     // 🔥 Upload to Cloudinary using file path
//     const result = await cloudinaryInstance.uploader.upload(req.file.path, {
//       folder: "admins",
//     });

//     // 🧹 delete local file after upload (important!)
//     fs.unlinkSync(req.file.path);

//     res.status(200).json({
//       success: true,
//       imageUrl: result.secure_url, // ✅ final URL
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Upload failed",
//     });
//   }
// };


//Get A Service
export const getSingleService = async (req: Request, res: Response) => {
  try {
    const { serviceId } = req.params;

    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.status(200).json({
      message: "Service fetched successfully",
      service,
    });
  } catch (error: any) {
    console.error("GET SINGLE SERVICE ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch service",
      error: error.message || error,
    });
  }
};