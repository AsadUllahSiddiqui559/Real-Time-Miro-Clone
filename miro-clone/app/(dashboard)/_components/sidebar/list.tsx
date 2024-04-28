"use client";
import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export const List = () =>{
  const {userMemberships} = useOrganizationList({
    userMemberships: {
      Infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4">
        {userMemberships.data?.map((mem)=>(
          <Item
          id={mem.organization.id}
          key={mem.organization.id}
          imageUrl={mem.organization.imageUrl}
          name={mem.organization.name}
        />
          // <p key = {mem.organization.id}>
          //   {mem.organization.name}
          // </p>
        ))}
    </ul>
  )
}
