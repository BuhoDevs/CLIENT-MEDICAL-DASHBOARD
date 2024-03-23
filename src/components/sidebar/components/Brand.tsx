// Chakra imports
import { Flex, Image, useColorMode } from "@chakra-ui/react";
// import { HorizonLogo } from "../../icons/Icons";
import { HSeparator } from "../../separator/Separator";
import ligthBrandImg from "../../../assets/img/brand/mdashlogo.png";
import darkBrandImg from "../../../assets/img/brand/darkbrand.png";

// Custom components

export function SidebarBrand() {
  //   Chakra color mode
  // const logoColor = useColorModeValue("navy.700", "white");
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <Flex alignItems="center" flexDirection="column">
      {/* <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} /> */}
      <Image
        src={isDarkMode ? darkBrandImg : ligthBrandImg}
        alt="medical dasboard image"
        title="imagen de la marca"
      />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
