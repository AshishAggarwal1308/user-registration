import {
  Box,
  Flex,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import GradeIcon from "@mui/icons-material/Grade";
import User4 from "../Data/user4.png";
import User5 from "../Data/user5.png";
import User2 from "../Data/user2.png";
import StarHalfIcon from '@mui/icons-material/StarHalf';

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};


const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600} fontSize={"17px"} color={"rgb(13,44,66)"}>
          {name}
        </Text>
        <Text
          fontFamily={"roboto"}
          fontWeight={440}
          fontSize={"13px"}
          color={useColorModeValue("gray.500", "gray.500")}
        >
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box>
      <Container maxW={"6xl"} py={24} as={Stack} spacing={20}>
        <Stack spacing={0} align={"center"}>
          <Text color={"#2563EB"} fontWeight={600}>
            2000+ Happy Traders
          </Text>
          <Text fontSize={36} fontWeight={600}>
            Don’t just take our words
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          spacing={{ base: 16, md: 16, lg: 16 }}
        >
          <Testimonial>
            <TestimonialContent>
              <Flex>
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
              </Flex>
              <Text>
                An excellent choice for informed investment decisions.
                Exceptional technical analysis training, practical approach, and
                valuable career support
              </Text>
            </TestimonialContent>
            <TestimonialAvatar
              style={{ fontWeight: 600 }}
              src={User5}
              name={"Shreya Arora"}
              title={"1st Batch"}
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <Flex>
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <StarHalfIcon style={{ color: "rgb(37,99,235)" }} />
              </Flex>
              <Text>
                Comprehensive learning, practical approach, and outstanding
                career support. Boosted my confidence for a rewarding financial
                career.
              </Text>
            </TestimonialContent>
            <TestimonialAvatar
              style={{ fontWeight: 600 }}
              src={User2}
              name={"Rahul Malik"}
              title={"2nd Batch"}
            />
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <Flex>
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
                <GradeIcon style={{ color: "rgb(37,99,235)" }} />
              </Flex>
              <Text>
                Life-changing stock market course with practical learning and
                excellent career support. Highly recommended for aspiring
                traders. Super happy.
              </Text>
            </TestimonialContent>
            <TestimonialAvatar
              style={{ fontWeight: 600 }}
              src={User4}
              name={"Drishti Sahni"}
              title={"3rd Batch"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
