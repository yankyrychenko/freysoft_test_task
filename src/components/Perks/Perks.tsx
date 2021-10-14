import {
  PerksSection,
  SliderText,
  SliderTitle,
  SwiperContainer,
  Title,
  Image,
  CardsWrap,
} from "./Perks.styles";
import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { useBreakpoint } from "../../utilities/resize/useBreakpoint";
import { perksData } from "../../data/perksData";

export const Perks = () => {
  const tablet = useBreakpoint(1440);

  return (
    <PerksSection>
      <BaseContainer>
        <Title>Our superb perks</Title>

        {!tablet && (
          <CardsWrap>
            {perksData.map((el) => (
              <SwiperContainer>
                <Image src={el.img} alt={el.title} />
                <SliderTitle>{el.title}</SliderTitle>
                <SliderText>{el.text}</SliderText>
              </SwiperContainer>
            ))}
          </CardsWrap>
        )}

        {tablet && (
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {perksData.map((el) => (
              <SwiperSlide>
                <SwiperContainer>
                  <Image src={el.img} alt={el.title} />
                  <SliderTitle>{el.title}</SliderTitle>
                  <SliderText>{el.text}</SliderText>
                </SwiperContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </BaseContainer>
    </PerksSection>
  );
};
