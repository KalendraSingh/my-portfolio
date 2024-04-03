import React from 'react'
import { certificateParticipationData } from '../../data/data'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useBreakpointValue,
  Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, ButtonGroup, Divider

} from '@chakra-ui/react'

function CertificateCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const modalSize = useBreakpointValue({ base: "sm", lg: "xl" });
  const { certificateItem } = props
  const { imgUrl, alt,title } = certificateItem
  return (
    <>
      <div className="w-full xl:px-5 h-auto xl:py-5 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <div className="w-full  overflow-hidden rounded-lg">
          <img
            className="object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={imgUrl} alt={alt}
          />
        </div>
        <div className='text-center'>
          <button onClick={onOpen} style={{ backgroundColor: "#ff014f",marginTop:"15px" }} className="text-white font-bold py-2 px-4 rounded w-full">
            View Certificate
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={imgUrl} alt={alt} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default CertificateCard;

