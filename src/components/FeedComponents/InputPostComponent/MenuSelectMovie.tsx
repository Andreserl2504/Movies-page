import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input
} from '@material-tailwind/react'

export function MenuSelectMovie() {
  return (
    <Menu
      dismiss={{
        itemPress: false
      }}
    >
      <MenuHandler>
        <Button placeholder={undefined} className=' h-8 w-16 flex justify-center items-center'>Search</Button>
      </MenuHandler>
      <MenuList placeholder={undefined}>
        <Input
          label='Search'
          containerProps={{
            className: 'mb-4'
          }}
          crossOrigin={undefined}
        />
        <MenuItem placeholder={undefined}>Menu Item 1</MenuItem>
        <MenuItem placeholder={undefined}>Menu Item 2</MenuItem>
        <MenuItem placeholder={undefined}>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  )
}
