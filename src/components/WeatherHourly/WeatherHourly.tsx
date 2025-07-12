import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { WeatherDetailsItem } from "../WeatherDetailsItem/WeatherDetailsItem";
import { Pagination } from "swiper/modules";
import { Hour } from "@/models/types";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./style.scss";

type WeatherHoursProps = { weather: Hour[] };

export const WeatherHourly = ({ weather }: WeatherHoursProps) => {
  return (
    <Swiper
      modules={[Pagination]}
      loop
      pagination={{ clickable: true }}
      breakpoints={{
        834: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        480: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        300: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      }}
      spaceBetween={20}
    >
      <SlidePrev />
      {weather.map((hour) => (
        <SwiperSlide>
          <WeatherDetailsItem
            heading={hour.time.slice(-5, hour.time.length)}
            forecastday={{
              conditionCode: hour.condition.code,
              conditionText: hour.condition.text,
              firstTemp_c: hour.temp_c,
              humidity: hour.humidity,
              wind: hour.wind_kph,
            }}
          />
        </SwiperSlide>
      ))}
      <SlideNext />
    </Swiper>
  );
};

const SlidePrev = () => {
  const swiper = useSwiper();

  return (
    <Button onClick={() => swiper.slidePrev()} className="weather-hourly-nav prev">
      <ChevronLeft size={25} />
    </Button>
  );
};

const SlideNext = () => {
  const swiper = useSwiper();

  return (
    <Button onClick={() => swiper.slideNext()} className="weather-hourly-nav next">
      <ChevronRight size={25} />
    </Button>
  );
};
