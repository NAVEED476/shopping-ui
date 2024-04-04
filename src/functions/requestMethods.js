import axios from "axios"

const BASE_URL = "https://shopping-microservice.onrender.com/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzVmM2NjMWUwMTU2MGMxOGI2Y2JiYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMjE5NzA0NCwiZXhwIjoxNzEyMjgzNDQ0fQ.pACQj5MvCDcolZup9XUJ3pJRGdxHSCC_iRRCXgfpInM"

export const publicRequest = axios.create({
    baseUrl : BASE_URL
})

export const userRequest = axios.create({
    baseUrl : BASE_URL,
    header:{
        token:`Bearer ${TOKEN}`
    }
})


// app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoute);
// app.use("/api/product", productRoute);
// app.use("/api/cart", cartRoutes);
// app.use("/api/order", orderRoutes);
// app.use("/api/checkout", stripeRoute);