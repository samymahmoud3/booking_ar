

import {
  Box,
  Flex,
  IconButton,
  SkeletonText,
} from '@chakra-ui/react'
import { FaLocationArrow } from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
} from '@react-google-maps/api'
import { useState } from 'react'

const center = {
  lat: 23.8859,
  lng: 45.0792
}

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyASgAbuH64TxCFi1thH0LEl_kIhNorkP3Q",
    libraries: ['places'],
  })

  const [map, setMap] = useState((null))

  if (!isLoaded) {
    return <SkeletonText />
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100%'
      w='100%'
    >
      <Box position='absolute' left={ 0 } top={ 0 } h='100%' w='100%'>
        <GoogleMap
          center={ center }
          zoom={ 5 }
          mapContainerStyle={ { width: '100%', height: '100%' } }
          options={ {
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: false,
            fullscreenControl: false,
          } }
          onLoad={ map => setMap(map) }
        >
          <Marker position={ center } />
        </GoogleMap>
      </Box>
      <Box
        p={ 2 }
        borderRadius='lg'
        m={ 0 }
        bgColor='white'
        shadow='base'
        zIndex='1'
        position='absolute' right={ 0 } top={ 0 }
      >
        <IconButton
          aria-label='center back'
          icon={ <FaLocationArrow /> }
          isRound
          onClick={ () => {
            map.panTo(center)
            map.setZoom(5)
          } }
        />
      </Box>
    </Flex>
  )
}

export default Map;