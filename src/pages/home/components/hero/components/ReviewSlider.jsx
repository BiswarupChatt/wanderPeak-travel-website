import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ReviewCard from "./ReviewCard";

const reviews = [
    { name: "M", text: "Just got back from a week-long, 20–26th January, all girls tour package of Manali–Kasol–Jibhi." },
    { name: "G", text: "Just got back from a week-long, 20–26th January, all girls tour package of Manali–Kasol–Jibhi." },
    { name: "A", text: "Just got back from a week-long, 20–26th January, all girls tour package of Manali–Kasol–Jibhi." },
    { name: "R", text: "Just got back from a week-long, 20–26th January, all girls tour package of Manali–Kasol–Jibhi." },
    { name: "S", text: "Just got back from a week-long, 20–26th January, all girls tour package of Manali–Kasol–Jibhi." },
    { name: "T", text: "Just got back from a week-long, 20–26th January, all girls tour package of Manali–Kasol–Jibhi." },
];

const ReviewSlider = () => {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 400,
                height: "450px", // Adjust as needed
            }}
        >
            <Swiper
                direction="vertical"
                slidesPerView={3} // always 3 slides visible
                spaceBetween={5}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop
                modules={[Autoplay]}
                style={{ height: "100%" }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default ReviewSlider;
