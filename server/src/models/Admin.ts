// import mongoose, { Document, Schema } from "mongoose";

// // 1. TypeScript Interface
// export interface IAdmin extends Document {
//     name: string;
//     email: string;
//     mobile: string; // ✅ ADD THIS
//     password: string;
//     role: "admin";
//     isActive: boolean;
//     createdAt: Date;
//     updatedAt: Date;
// }

// // 2. Mongoose Schema
// const AdminSchema: Schema<IAdmin> = new Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//             trim: true,
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//             lowercase: true,
//         },
//         mobile: {
//             type: String,
//             required: true,
//             unique: true,
//             validate: {
//                 validator: function (v: string) {
//                     return /^\d{10}$/.test(v); // exactly 10 digits
//                 },
//                 message: (props: any) => `${props.value} is not a valid 10-digit mobile number!`,
//             },
//         },
//         password: {
//             type: String,
//             required: true,
//             minlength: 6,
//             maxlength: 100,
//         },
//         role: {
//             type: String,
//             enum: ["admin", "superadmin"],
//             default: "admin",
//         },
//         isActive: {
//             type: Boolean,
//             default: true,
//         },
//     },
//     {
//         timestamps: true, // adds createdAt & updatedAt
//     }
// );

// // 3. Model Export
// const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);

// export default Admin;



import mongoose, { Document, Schema } from "mongoose";

// 1. TypeScript Interface
export interface IAdmin extends Document {
    name: string;
    email: string;
    mobile: string;
    password: string;
    role: "admin" | "superadmin";
    isActive: boolean;

    // ✅ ADD THESE
    resetPasswordToken?: string;
    resetPasswordExpire?: Date;

    createdAt: Date;
    updatedAt: Date;
}

// 2. Mongoose Schema
const AdminSchema: Schema<IAdmin> = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v: string) {
                    return /^\d{10}$/.test(v);
                },
                message: (props: any) =>
                    `${props.value} is not a valid 10-digit mobile number!`,
            },
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 100,
        },
        role: {
            type: String,
            enum: ["admin", "superadmin"],
            default: "admin",
        },
        isActive: {
            type: Boolean,
            default: true,
        },

        // ✅ RESET PASSWORD FIELDS
        resetPasswordToken: {
            type: String,
        },
        resetPasswordExpire: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

// 3. Model Export
const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);

export default Admin;