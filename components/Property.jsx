import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify';
import defaultImage from '../assets/images/house.jpg'

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => {
    return (
        <Link href={`/property/${externalID}`} passHref>
            <Flex flexWrap='wrap' justifyContent='flex-start' width='420px' p='5' paddingTop='0' cursor='pointer'>
                <Box>
                    <Image src={coverPhoto ? coverPhoto.url : defaultImage} width={400} height={260} alt='House' />
                </Box>
                <Box w='full'>
                    <Flex alignItems='center' justifyContent='space-between' paddingTop='2'>
                        <Flex alignItems='center'>
                            <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                            <Text fontSize='lg' fontWeight='bold'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box>
                            <Avatar size="sm" src={agency?.logo?.url} />
                        </Box>
                    </Flex>
                    <Flex p="1" justifyContent="space-between" alignItems="center" width="250px" color="blue.400">
                        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize="lg">
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    )
}

export default Property