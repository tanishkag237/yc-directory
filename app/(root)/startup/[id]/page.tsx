import { STARTUP_DETAILS_BY_ID } from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';
import React from 'react'

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
  
    const user = await client.fetch(STARTUP_DETAILS_BY_ID, { id });
    if (!user) return notFound();
  return (
    <div>{user.title}</div>
  )
}

export default page