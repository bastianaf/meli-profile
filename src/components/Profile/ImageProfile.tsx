import { Wrap, WrapItem, Avatar } from "@chakra-ui/react";

export default function  ImageProfile({ name,  image }: { name: string,  image: string }) {

    return (
      <>
        <Wrap>
            <WrapItem>
              <Avatar 
                size='lg'
                name={name}
                src={image} />
            </WrapItem>
          </Wrap>

      </>
    )

}