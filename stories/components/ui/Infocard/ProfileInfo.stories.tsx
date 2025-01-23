import type { Meta, StoryObj } from "@storybook/react"

import {ProfileInfoProps, ProfileInfo} from '../../../../components/ui/Infocard/ProfileInfo'

 const meta: Meta<ProfileInfoProps> = {
    title: "components/ui/cards/InfoCardWithAddress",
    component: ProfileInfo,
    tags: ["autodocs"],
    render: (args: ProfileInfoProps) => (
      <div style={{ 
        margin: "auto auto", 
        width : "360px", 
        backgroundColor : "black"
        }}>
        <ProfileInfo {...args} />
      </div>
    ),
    args: {
      name: "Email Address",
      src : "1.jpg",
    },
  }

export default meta

type Story = StoryObj<ProfileInfoProps>

export const Default: Story = {
    args: {
      varient : "Contacts"
    },
  }


export const Search: Story = {
    args: {
      varient : "Search"
    },
  }

