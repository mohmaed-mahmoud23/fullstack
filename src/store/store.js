import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice"; // تأكد أن المسار صحيح

export const store = configureStore({
  reducer: {
    user: userslice, // المستخدم هنا هو "reducer" الذي تم تصديره افتراضيًا
  },
});
