import {
  BenefitsSection,
  Title,
  SwiperContainer,
  CardTitle,
  CardText,
  TextsList,
  Image,
  Icon,
} from "./Benefits.styles";
import youWillGet from "../../assets/images/youWillGet.svg";
import youWillNotGet from "../../assets/images/youWillNotGet.svg";
import { BaseContainer } from "../../core-ui/BaseContainer.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { useBreakpoint } from "../../utilities/resize/useBreakpoint";
import YesIcon from "../../assets/images/yes-icon.svg";
import NoIcon from "../../assets/images/no-icon.svg";

export const Benefits = () => {
  const tablet = useBreakpoint(768);
  return (
    <BenefitsSection>
      <BaseContainer>
        <Title>Within our recruitment process, as a candidate …</Title>

        <Swiper spaceBetween={10} slidesPerView={tablet ? 1 : 2}>
          <SwiperSlide>
            <SwiperContainer>
              <Image src={youWillGet} alt="You will get" />
              <CardTitle>You will get</CardTitle>
              <TextsList>
                <li>
                  <Icon src={YesIcon} alt="yes" />
                  <CardText>
                    The fast feedback on every stage of the recruitment
                  </CardText>
                </li>
                <li>
                  <Icon src={YesIcon} alt="yes" />
                  <CardText>Timesaving productive interviews </CardText>
                </li>
                <li>
                  <Icon src={YesIcon} alt="yes" />
                  <CardText>
                    Opportunity to get acquainted with the future project, your
                    team colleagues, and CEO in advance chance of receiving the
                    job offer on the same day of your interview
                  </CardText>
                </li>
              </TextsList>
            </SwiperContainer>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperContainer>
              <Image src={youWillNotGet} alt="You will not get" />
              <CardTitle>You will not get</CardTitle>
              <TextsList>
                <li>
                  <Icon src={NoIcon} alt="no" />
                  <CardText>Huge exhausted free tests</CardText>
                </li>
                <li>
                  <Icon src={NoIcon} alt="no" />
                  <CardText>
                    Long-awaited pauses in communication with us multiple
                    interviews from our side
                  </CardText>
                </li>
                <li>
                  <Icon src={NoIcon} alt="no" />
                  <CardText>Bullshit</CardText>
                </li>
                <li>
                  <Icon src={NoIcon} alt="no" />
                  <CardText>Herassment</CardText>
                </li>
              </TextsList>
            </SwiperContainer>
          </SwiperSlide>
        </Swiper>
      </BaseContainer>
    </BenefitsSection>
  );
};
