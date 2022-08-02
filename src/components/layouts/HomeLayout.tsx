import { Box } from "@chakra-ui/react";

export default function HomeLayout({ children }: { children: React.ReactElement }) {
  return (
    <Box maxWidth="container.xl" mx="auto" mb="28px">
      {children}
    </Box>
  );
}
