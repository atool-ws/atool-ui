import { chakra, HTMLChakraProps, useColorModeValue, useToken } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props: HTMLChakraProps<'svg'>) => {
  const [white, black] = useToken('colors', ['white', 'gray.800'])
  return (
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 124.3 32.97"><path d="M12.21 23.76c-1.08.44-2.7.81-4.86 1.12-1.22.18-2.09.37-2.59.59-.51.22-.9.54-1.17.97-.28.42-.41.9-.41 1.41 0 .79.3 1.45.9 1.98.6.53 1.48.79 2.64.79 1.15 0 2.17-.25 3.06-.75.9-.5 1.55-1.19 1.97-2.06.32-.67.48-1.67.48-2.98v-1.07zm.25 6.65c-1.1.94-2.16 1.6-3.18 1.98a9.31 9.31 0 0 1-3.28.58c-1.93 0-3.41-.47-4.44-1.41C.52 30.61 0 29.41 0 27.94c0-.86.2-1.64.59-2.35a4.8 4.8 0 0 1 1.54-1.71c.63-.43 1.35-.76 2.14-.97.58-.15 1.46-.3 2.64-.45 2.4-.28 4.17-.63 5.3-1.02.01-.41.02-.67.02-.78 0-1.21-.28-2.07-.84-2.56-.77-.68-1.89-1.01-3.39-1.01-1.4 0-2.43.24-3.1.73-.67.49-1.16 1.36-1.48 2.6l-2.91-.4c.26-1.25.7-2.25 1.31-3.02.6-.77 1.48-1.35 2.63-1.77 1.14-.41 2.47-.62 3.98-.62 1.5 0 2.72.18 3.65.53.94.35 1.63.79 2.07 1.33.44.54.75 1.21.93 2.03.1.51.15 1.42.15 2.74v3.97c0 2.76.06 4.51.19 5.24.13.73.38 1.44.75 2.11h-3.11c-.31-.61-.51-1.33-.6-2.15M19.83 32.57V15.02h2.67v2.5c1.29-1.93 3.15-2.89 5.59-2.89 1.06 0 2.03.19 2.92.57.89.38 1.55.88 1.99 1.5.44.61.75 1.35.92 2.2.11.55.17 1.52.17 2.89v10.79h-2.97V21.89c0-1.21-.11-2.12-.35-2.72-.23-.6-.64-1.08-1.23-1.44-.59-.36-1.28-.54-2.08-.54-1.27 0-2.36.4-3.28 1.21-.92.8-1.38 2.33-1.38 4.58v9.59h-2.97zM40.9 22.11h9.8c-.13-1.48-.51-2.58-1.12-3.32-.95-1.14-2.18-1.72-3.69-1.72-1.37 0-2.51.46-3.44 1.37-.93.91-1.45 2.14-1.55 3.67m9.77 4.81 3.07.38c-.49 1.79-1.38 3.19-2.69 4.18-1.31.99-2.99 1.49-5.02 1.49-2.57 0-4.6-.79-6.1-2.37-1.51-1.58-2.26-3.8-2.26-6.65 0-2.95.76-5.24 2.28-6.88 1.52-1.63 3.49-2.45 5.92-2.45 2.34 0 4.26.8 5.75 2.4 1.49 1.6 2.23 3.84 2.23 6.74 0 .17 0 .44-.02.79H40.74c.11 1.93.66 3.4 1.64 4.43.98 1.03 2.2 1.54 3.67 1.54 1.09 0 2.02-.28 2.79-.86.77-.57 1.38-1.49 1.83-2.74M56.29 27.33l2.94-.46c.17 1.18.63 2.08 1.38 2.71.75.63 1.81.94 3.16.94 1.37 0 2.38-.28 3.04-.83.66-.56.99-1.21.99-1.96 0-.67-.29-1.2-.88-1.59-.41-.26-1.42-.6-3.04-1.01-2.18-.55-3.69-1.03-4.54-1.43-.84-.4-1.48-.96-1.92-1.67-.43-.71-.65-1.49-.65-2.35 0-.78.18-1.51.54-2.17.36-.67.84-1.22 1.46-1.66.46-.34 1.09-.63 1.89-.87.8-.24 1.65-.36 2.57-.36 1.38 0 2.59.2 3.63.59 1.04.4 1.81.93 2.31 1.61.49.68.84 1.59 1.02 2.72l-2.91.4c-.13-.9-.51-1.61-1.15-2.11-.63-.51-1.53-.76-2.69-.76-1.37 0-2.34.23-2.92.68-.58.45-.88.98-.88 1.59 0 .38.12.73.36 1.04.25.32.62.59 1.14.79.3.11 1.17.36 2.63.76 2.1.56 3.58 1.02 4.41 1.38.83.36 1.49.88 1.96 1.56s.71 1.53.71 2.55c0 .99-.29 1.92-.87 2.8-.58.88-1.41 1.55-2.5 2.03-1.09.48-2.32.72-3.7.72-2.28 0-4.02-.47-5.21-1.42-1.18-.95-1.95-2.36-2.28-4.22M79.28 32.57 72.6 15.02h3.14l3.77 10.51c.41 1.14.78 2.31 1.12 3.54.26-.92.63-2.04 1.11-3.34l3.9-10.71h3.06l-6.64 17.55h-2.78zM102.53 23.76c-1.08.44-2.7.81-4.86 1.12-1.23.18-2.09.37-2.6.59-.51.22-.9.54-1.17.97-.28.42-.41.9-.41 1.41 0 .79.3 1.45.9 1.98.6.53 1.48.79 2.64.79 1.15 0 2.17-.25 3.06-.75.9-.5 1.55-1.19 1.97-2.06.32-.67.48-1.67.48-2.98v-1.07zm.25 6.65c-1.1.94-2.16 1.6-3.18 1.98a9.31 9.31 0 0 1-3.28.58c-1.93 0-3.41-.47-4.44-1.41-1.04-.94-1.55-2.14-1.55-3.61 0-.86.2-1.64.59-2.35a4.8 4.8 0 0 1 1.54-1.71c.63-.43 1.35-.76 2.14-.97.58-.15 1.46-.3 2.64-.45 2.4-.28 4.17-.63 5.3-1.02.01-.41.02-.67.02-.78 0-1.21-.28-2.07-.84-2.56-.76-.67-1.89-1.01-3.39-1.01-1.4 0-2.43.24-3.1.73-.67.49-1.16 1.36-1.48 2.6l-2.91-.4c.26-1.25.7-2.25 1.31-3.02.6-.77 1.48-1.35 2.63-1.77 1.14-.41 2.47-.62 3.98-.62 1.5 0 2.72.18 3.65.53.94.35 1.63.79 2.07 1.33.44.54.75 1.21.93 2.03.1.51.15 1.42.15 2.74v3.97c0 2.76.06 4.51.19 5.24.13.73.38 1.44.75 2.11h-3.11c-.32-.62-.52-1.34-.61-2.16M112.13 23.81c0 2.25.47 3.93 1.42 5.04.95 1.11 2.07 1.67 3.36 1.67 1.3 0 2.41-.53 3.31-1.6.91-1.06 1.37-2.68 1.37-4.87 0-2.4-.46-4.17-1.39-5.29-.93-1.12-2.07-1.68-3.42-1.68-1.32 0-2.43.54-3.31 1.62-.89 1.08-1.34 2.79-1.34 5.11m9.41 8.76v-2.21c-1.11 1.74-2.75 2.61-4.91 2.61-1.4 0-2.69-.38-3.86-1.16-1.17-.77-2.08-1.85-2.73-3.23-.64-1.38-.97-2.97-.97-4.77 0-1.75.29-3.34.88-4.77.58-1.43 1.46-2.52 2.63-3.28 1.17-.76 2.47-1.14 3.92-1.14 1.06 0 2 .22 2.82.67.83.45 1.5 1.03 2.02 1.74V8.34h2.96v24.23h-2.76zM.34 8.28V1.67H4.8v.78H1.22V4.5h3.1v.78h-3.1v3zM10.28 1.67h.87v3.82c0 .66-.07 1.19-.22 1.58-.15.39-.42.71-.81.96-.4.24-.91.37-1.55.37-.62 0-1.13-.11-1.52-.32s-.68-.53-.84-.93c-.17-.41-.26-.96-.26-1.66V1.67h.88v3.82c0 .57.05 1 .16 1.27.1.27.29.48.55.63.26.14.58.22.95.22.64 0 1.1-.15 1.38-.44.27-.29.41-.85.41-1.68V1.67zM12.6 8.28V1.67h.9l3.48 5.19V1.67h.84v6.61h-.9l-3.48-5.19v5.19zM20.16 7.5h1.41c.44 0 .78-.04 1.03-.12.25-.08.44-.2.59-.34.21-.21.37-.49.49-.84.11-.35.17-.77.17-1.27 0-.69-.11-1.22-.34-1.59-.23-.37-.5-.62-.83-.75-.23-.09-.61-.14-1.13-.14h-1.39V7.5zm-.87.78V1.67h2.28c.51 0 .91.03 1.18.09.38.09.7.24.97.47.35.29.61.67.78 1.13.17.46.26.98.26 1.57 0 .5-.06.95-.18 1.33-.12.39-.27.71-.45.96s-.39.45-.6.6c-.22.15-.48.26-.79.33s-.66.11-1.06.11h-2.39zM27.14 5.57h2.24l-.69-1.83c-.21-.56-.37-1.01-.47-1.37-.08.42-.2.85-.36 1.26l-.72 1.94zm-1.91 2.71 2.54-6.61h.94l2.71 6.61h-1l-.77-2h-2.76l-.73 2h-.93zM36.84 5.96l.88.22c-.18.72-.51 1.27-.99 1.65-.48.38-1.06.57-1.75.57-.71 0-1.29-.15-1.74-.43-.45-.29-.79-.71-1.02-1.26-.23-.55-.35-1.14-.35-1.77 0-.69.13-1.29.39-1.8s.64-.9 1.12-1.17c.49-.27 1.02-.4 1.6-.4.66 0 1.22.17 1.67.5.45.34.77.81.94 1.42l-.86.2c-.15-.48-.38-.83-.67-1.05-.29-.22-.66-.33-1.1-.33-.51 0-.93.12-1.27.36-.34.24-.58.57-.72.98-.14.41-.21.83-.21 1.27 0 .56.08 1.05.25 1.47.17.42.42.73.77.94.35.21.72.31 1.12.31.49 0 .91-.14 1.25-.42.34-.28.57-.7.69-1.26M38.94 1.67h.88v6.61h-.88zM42 5.08c0 .8.21 1.42.64 1.88.43.46.97.69 1.61.69.66 0 1.2-.23 1.62-.7.43-.46.64-1.12.64-1.97 0-.54-.09-1.01-.27-1.41-.18-.4-.45-.71-.8-.93-.35-.22-.74-.33-1.18-.33-.62 0-1.15.21-1.6.64-.44.42-.66 1.13-.66 2.13m-.91-.02c0-1.1.29-1.96.89-2.58.59-.62 1.35-.93 2.28-.93.61 0 1.16.15 1.65.44.49.29.86.7 1.12 1.22.26.52.39 1.11.39 1.77 0 .67-.14 1.27-.41 1.8-.27.53-.65.93-1.15 1.2s-1.03.42-1.61.42c-.62 0-1.18-.15-1.67-.45-.49-.3-.86-.71-1.11-1.23s-.38-1.08-.38-1.66m2.61-3.8L44.3 0h1.07l-.99 1.26h-.68zM48.54 8.28V1.67h.9l3.47 5.19V1.67h.84v6.61h-.9l-3.47-5.19v5.19z"/></svg>
  )
}