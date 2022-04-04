import React, { VFC } from 'react'
import { Header } from 'views/index'

import { Text } from 'components/index'

export const App: VFC = () => {
  return (
    <>
     <Header />
     <p>Hello World</p>
     <Text fontSize='s'>sサイズテキスト</Text>
     <Text fontSize='m'>mサイズテキスト</Text>
     <Text fontSize='l'>lサイズテキスト</Text>
     <Text fontSize='xl'>xlサイズテキスト</Text>
    </>
  )
}
