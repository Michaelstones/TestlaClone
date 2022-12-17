import React from 'react'
import Section from './Section'
import styled from 'styled-components'


function Home() {
  return (
    <Container>
        <Section
        title='Model S'
        desc = 'order online for touchless delivery'
        backImg= 'model-s.jpg'
        lefttext= 'custom order'
        rightext='existing inventory'
        />
        <Section
        title='Model Y'
        desc = 'order online for touchless delivery'
        backImg= 'model-y.jpg'
        lefttext= 'custom order'
        rightext='existing inventory'
        /> 
        <Section
        title='Model 3'
        desc = 'order online for touchless delivery'
        backImg= 'model-3.jpg'
        lefttext= 'custom order'
        rightext='existing inventory'
        />
        <Section
        title='Model X'
        desc = 'order online for touchless delivery'
        backImg= 'model-x.jpg'
        lefttext= 'custom order'
        rightext='existing inventory'
        />
        <Section
        title='Solar for new Roofs'
        desc = 'Solar roof cost less than a new roof plus solar panel'
        backImg= 'solar-roof.jpg'
        lefttext= 'order now'
        rightext='learn more'
        />
        <Section
        title='Accessories'
        desc = ''
        backImg= 'accessories.jpg'
        lefttext= 'shop now'
        // rightext='existing inventory'
        />
    </Container>
  )
}

export default Home

const Container =styled.div`
height:100vh;
` 