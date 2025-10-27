import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ReviewCard from "./ReviewCard";

const reviews = [
    { name: "M", text: "Just got back from a week-long, 20–26th January, all girls tour package of Manali–Kasol–Jibhi." },
    { name: "G", text: "December 2023 New Year – I’ve recently done Jaisalmer weekend trip, accommodation in Jaisalmer was perfect!" },
    { name: "A", text: "The Kashmir Great Lake Trek with JustWravel was an absolute dream come true. Words can’t fully capture it!" },
    { name: "R", text: "An unforgettable Meghalaya trip — amazing waterfalls, homestays, and super friendly group!" },
    { name: "S", text: "Our Spiti Valley road trip was beyond expectations. The team managed everything flawlessly!" },
    { name: "T", text: "Leh-Ladakh bike expedition was thrilling! Excellent guides and great company all through." },
];

const ReviewSlider = () => {
    return (
        <Box sx={{ width: "100%", maxWidth: 400 }}>
            <Swiper
                direction="vertical"
                slidesPerView={2}
                spaceBetween={20}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop
                modules={[Autoplay]}
                style={{ height: "350px" }}
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
