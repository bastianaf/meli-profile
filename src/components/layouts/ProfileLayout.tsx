import { Box, Stack, Grid, GridItem} from "@chakra-ui/react";
import type { ReactElement } from 'react'

export default function ProfileLayout({ children }: { children: React.ReactElement }) {
  return (
    <Stack spacing={2}>
        <Grid
          h='800px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg='white' />
          <GridItem colSpan={4}>
            {children}
          </GridItem>
        </Grid>
    </Stack>

  );
}
