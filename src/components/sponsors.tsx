import * as React from "react";

import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/core";

import Link from "@/components/link";
import type { Sponsor } from "@/types";

interface SponsorsProps {
  sponsors: Record<string, Sponsor[]>;
}

const Sponsors: React.FC<SponsorsProps> = ({ sponsors }) => {
  return (
    <Stack
      letterSpacing="tight"
      maxW="6xl"
      mx="auto"
      p={{ default: 8, md: 16 }}
      shouldWrapChildren
      spacing={16}
      textAlign="center"
    >
      {Object.entries(sponsors).map(([category, sp]) => (
        <Stack key={category} spacing={8}>
          <Heading size="md">{category}</Heading>
          <Flex flexWrap="wrap" justifyContent="center">
            {sp.map((s) => (
              <Link href={s.url} isExternal key={s.name} p={4} alt={s.name}>
                <Image src={s.logo.url} alt={s.name} />
                <Box fontSize="xs" pt={4}>
                  {s.name}
                </Box>
              </Link>
            ))}
          </Flex>
        </Stack>
      ))}
    </Stack>
  );
};

export default Sponsors;
