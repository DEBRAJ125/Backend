import {v2 as cloudinary}  from cloudinary;
import fs from 'fs';
cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });
    const uploadcloudinary = async (localPath) => {
        try {
            if(!fs.existsSync(localPath)){
                throw new Error("File does not exist");
            }
            const result = await cloudinary.uploader.upload(localPath, {
                folder: "public",
                resource_type: "auto",
            });
            return result;
        } catch (error) {
            
            console.error(error);
            throw error;
        }
        finally {            fs.unlink(localPath, (err) => {
                if (err) {
                    console.error("Error deleting file:", err);
                } else {
                    console.log("File deleted successfully");
                }
            });
        }
    };