import { Stack, StackDivider, Text, Image } from "@chakra-ui/react"

const ProductsBlock = ({ products }: { products: Array<any> }) => {
  return (
    <Stack direction="row" spacing={6}>
      {products.map((item: any) => (
        <Stack
          key={item.img}
          _hover={{ shadow: "md" }}
          bg="white"
          borderRadius="md"
          divider={<StackDivider />}
        >
          <Image src={item.img} />
          <Stack pb="16px" px="12px" spacing={0}>
            <Stack alignItems="center" direction="row">
              <Text fontSize="22px">{item.price}</Text>
              <Text color="green.400" fontSize="sm">
                {item.discount}% off
              </Text>
            </Stack>
            {item.free_shipping && (
              <Text color="green.400" fontSize="sm" fontWeight="bold">
                Envío gratis
              </Text>
            )}
          </Stack>
        </Stack>
      ))}
    </Stack> 
  );
}

export default ProductsBlock
