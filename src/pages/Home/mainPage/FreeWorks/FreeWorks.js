import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import {useIntl} from "react-intl";
import {Box} from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Assuming these are your images
import image1 from '../../../../assets/img/landing/onee.jpeg';
import image2 from '../../../../assets/img/landing/two.jpeg';
import image3 from '../../../../assets/img/landing/three.jpeg';
import image4 from '../../../../assets/img/landing/fout.jpeg';
import image5 from '../../../../assets/img/landing/five.jpeg';
import image6 from '../../../../assets/img/landing/six.jpeg';
import image7 from '../../../../assets/img/landing/seven.jpeg';
import {Button} from "@mui/material";

const FreeWorks = () => {
  const { formatMessage } = useIntl()

    const images = [
        {src: image1, index: 1, alt: "Resource 1"},
        {src: image2, index: 2, alt: "Resource 2"},
        {src: image3, index: 3, alt: "Resource 3"},
        {src: image4, index: 4, alt: "Resource 4"},
        {src: image5, index: 5, alt: "Resource 5"},
        {src: image6, index: 6, alt: "Resource 6"},
        {src: image7, index: 7, alt: "Resource 7"},
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        nextArrow: <CustomPrevArrow />,
        prevArrow: <CustomPrevArrow />,
        autoplay: true,
        autoplaySpeed: 2500,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             initialSlide: 1
        //         }
        //     }
        // ],
        // appendDots: dots => (
        //     <CustomDots>
        //         {dots}
        //     </CustomDots>
        // ),
        // customPaging: i => (
        //     <CustomDot />
        // ),
    };

    return (
        <>
        <IntroWrapper id="aboutWineInvesting">
            <FlexBox>
                <Box>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 500,
                            fontSize: '48px',
                            color: '#fff',
                            mb: 4,
                            textAlign: 'center'
                        }}
                    >
                      {formatMessage({ id: '1000Works' })}
                        
                    </Typography>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 400,
                            fontSize: '32px',
                            color: '#93918D',
                            textAlign: 'center',
                            mb:5
                        }}
                    >
                      {formatMessage({ id: '1000WorksInfo' })}
                        
                    </Typography>
                </Box>

                <CarouselWrapper>
                    <Slider {...settings}>
                            {images.map((b, index) => (
                                <StyledImg key={index} src={b.src} alt={b.alt}/>
                            ))}

                    </Slider>
                </CarouselWrapper>
            </FlexBox>
        </IntroWrapper>
    <CustomButton>
    {formatMessage({ id: 'ShowMore' })}
       
    </CustomButton>
            </>
    );
}

export default FreeWorks;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: relative;
  padding: 60px 60px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vh;
  width: 100%;
  justify-content: center;
  gap: 20px;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  margin: auto;
`;



const StyledImg = styled.img`
  height: 500px;
  max-width: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const CustomDots = styled.ul`
  display: flex !important;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
  bottom:-40px
  
`;

const CustomDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.63);
  margin: 0 5px;
  cursor: pointer;
`;

const CustomPrevArrow = styled.div`
  display: none !important;
`;

const CustomButton = styled(Button)`
  width: 100%;
  background: #D9D9D9;
  color: black;
  border-radius: 0;
  font-weight: 400;
  font-size: 24px;
  padding: 28px;
  text-transform: none;

  &:hover {
    background: rgba(217, 217, 217, 0.53);
  }
`