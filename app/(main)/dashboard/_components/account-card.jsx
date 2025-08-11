'use client';

import { bulkDeleteTransactions, updateDefaultAccount } from '@/actions/accounts';
import { deleteAccount } from '@/actions/dashboard';
import useFetch from '@/app/hooks/use-fetch';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { ArrowDownRight, ArrowUpRight, MoreHorizontal, MoreVertical, Trash2, Trash2Icon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const AccountCard = ({account}) => {
  const {name,type,balance,id,isDefault} = account;
  const [isDeleted, setIsDeleted] = useState(false);

const {
  loading:updateDefaultLoading,
  fn:updateDefaultFn,
  data:updatedAccount,
  error,

} = useFetch(updateDefaultAccount);



const {
  loading: deleteLoading,
  fn: deleteFn,
  data: deletedAccount,
  error: deleteError,
} = useFetch(deleteAccount);

const handleDefaultChange=async(event)=>{
event.preventDefault();
event.stopPropagation();

if(isDefault){
  toast.warning("You need atleast 1 default account");
  return;  //not allowing toggle off the default account
}


await updateDefaultFn(id);
}


const handleDelete = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (isDefault) {
    toast.warning("Cannot delete default account. Set another account as default first.");
    return;
  }

  if (!window.confirm(`Are you sure you want to delete this account and all its transactions? This action cannot be undone.`)) {
    return;
  }

  await deleteFn(id);
  setIsDeleted(true);
}

useEffect(() => {
if(updatedAccount?.success){
  toast.success("Default account updated Successfully");
}
}, [updatedAccount,updateDefaultLoading]);


useEffect(() => {
  if(error){
    toast.error(error.message || "Failed to update default account");
  }
  }, [error]);

  useEffect(() => {
    if (deletedAccount?.success) {
      toast.success(`${name} account deleted successfully`);
    }
  }, [deletedAccount]);

  useEffect(() => {
    if (deleteError) {
      toast.error(deleteError.message || "Failed to delete account");
    }
  }, [deleteError]);

  if (isDeleted) {
    return null; // Or return a loading state if you prefer
  }
  
  return (
    <div>
      <Card className='hover:shadow-md transition-shadow group relative'>
        <Link href={`/account/${id}`}>
       
  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
  
    <CardTitle className='text-sm font-medium capitalize'>{name}</CardTitle>
    <Switch checked={isDefault} onClick={handleDefaultChange} disabled={updateDefaultLoading}/>
  </CardHeader>
  <CardContent>
    <div className='flex flex-row justify-between'>
    <div className='text-2xl font-bold'>
   ₹{parseFloat(balance).toFixed(2)}
   </div>
      <div>
      <DropdownMenu>
                  <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
                    <Button 
                      variant="ghost" 
                      className="h-8 w-8 p-0"
                      onClick={(e) => e.preventDefault()}
                      disabled={deleteLoading}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={handleDelete}
                      disabled={deleteLoading}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
      </div>
    </div>
   
   <p className='text-xs text-muted-foreground'>
    {type.charAt(0) + type.slice(1).toLowerCase()} Account
   </p>
  </CardContent>
  <CardFooter className='flex justify-between text-sm text-muted-foreground'>
   <div className='flex items-center'>
    <ArrowUpRight className='mr-1 h-4 w-4 text-green-500'/>
    Income
   </div>
   <div className='flex items-center'>
    <ArrowDownRight className='mr-1 h-4 w-4 text-red-500'/>
    Expense 
   </div>
  </CardFooter>
  </Link>
</Card>

    </div>
  )
}

export default AccountCard;
