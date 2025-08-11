"use client";

import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  getWalletBalance,
  createWalletEntry,
  withdrawFromWallet,
} from "@/actions/wallet";
import { Minus, Plus, X, Loader2, Wallet2 } from "lucide-react";
import { toast } from "sonner";

const WalletPopover = ({ accountId }) => {
  const [amount, setAmount] = useState("");
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState(undefined);
  const [loading, setLoading] = useState({ add: false, withdraw: false });

  const fetchBalance = async () => {
    try {
      const res = await getWalletBalance(accountId);
      setBalance(res.balance);
    } catch (err) {
      toast.error("Failed to fetch balance.");
    }
  };

  const handleAdd = async () => {
    try {
      console.log("handleAdd triggered");
      if (!amount || isNaN(amount) || Number(amount) <= 0) {
        console.log("Invalid input for add");
        toast.error("Enter a valid amount");
        return;
      }
      setLoading((prev) => ({ ...prev, add: true }));
      await createWalletEntry(Number(amount), accountId);
      toast.success(`₹ ${amount} added to wallet.`);
      await fetchBalance();
      setAmount("");
      setOpen(false);
    } catch (err) {
      toast.error(err.message || "Failed to add to wallet");
    } finally {
      setLoading((prev) => ({ ...prev, add: false }));
    }
  };

  const handleWithdraw = async () => {
    try {
      console.log("handleAdd triggered");
      if (!amount || isNaN(amount) || Number(amount) <= 0) {
        console.log("Invalid input for add");
        toast.error("Enter a valid amount");
        return;
      }
      setLoading((prev) => ({ ...prev, withdraw: true }));
      const res = await withdrawFromWallet(Number(amount), accountId);
      toast.success(res.message || `₹ ${amount} withdrawn from wallet.`);
      await fetchBalance();
      setAmount("");
      setOpen(false);
    } catch (err) {
      toast.error(err.message || "Failed to withdraw from wallet");
    } finally {
      setLoading((prev) => ({ ...prev, withdraw: false }));
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="mt-5 flex flex-row" variant="ghost">
          <Wallet2 width={50} height={50} className="text-blue-800" />
          <h2 className="font-semibold text-gray-600 dark:text-white ml-2">
            Your Wallet / Savings
          </h2>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-96 p-4 rounded-2xl shadow-xl bg-white dark:bg-zinc-900">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold flex flex-row gap-2">
            <Wallet2 className="text-gray-600" />
            Your Savings
          </h2>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="text-muted-foreground text-sm mb-4 flex items-center gap-1">
          Balance:
          {balance === undefined ? (
            <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
          ) : (
            <span className="font-semibold text-emerald-600 ml-1">
              ₹ {balance}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1"
          />

          <Button
            onClick={handleWithdraw}
            disabled={loading.withdraw}
            className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-muted-foreground"
            variant="ghost"
          >
            {loading.withdraw ? (
              <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
            ) : (
              <div className="flex items-center gap-1">
                <Minus className="w-4 h-4 text-blue-600" />
                Withdraw
              </div>
            )}
          </Button>

          <Button
            onClick={handleAdd}
            disabled={loading.add}
            className="hover:bg-green-50 dark:hover:bg-green-900/20 text-muted-foreground"
            variant="ghost"
          >
            {loading.add ? (
              <Loader2 className="w-4 h-4 animate-spin text-green-600" />
            ) : (
              <div className="flex items-center gap-1">
                <Plus className="w-4 h-4 text-green-600" />
                Add
              </div>
            )}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default WalletPopover;
