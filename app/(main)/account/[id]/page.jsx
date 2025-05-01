import React, { Suspense } from "react";
import { getAccountWithTransactions } from "@/actions/accounts";
import NotFound from "@/app/not-found";
import TransactionTable from "../_components/transactions-table";
import AccountChart from "../_components/account-chart";
import WalletShow from "../_components/wallet-show";
import { BarLoader } from "react-spinners";

export const dynamic = "force-dynamic";

const Loader = () => (
  <BarLoader className="mt-2" width={"100%"} color="#9333ea" />
);

const AccountInfo = ({ account }) => (
  <div className="flex gap-4 justify-between">
    <div>
      <h1 className="text-4xl sm:text-4xl font-bold tracking-wider gradient-title capitalize">
        {account.name}
      </h1>
      <p className="text-muted-foreground">
        {account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account
      </p>
    </div>
    <div className="text-right pb-2">
      <div className="text-xl sm:text-2xl font-bold">
        ₹ {parseFloat(account.balance).toFixed(2)}
      </div>
      <p className="text-muted-foreground">
        {account._count.transactions} Transactions
      </p>
      <WalletShow accountId={account.id} />
    </div>
  </div>
);

const AccountsPage = async ({ params: asyncParams }) => {
  const params = await asyncParams;
  const accountData = await getAccountWithTransactions(params.id);

  if (!accountData) {
    return <NotFound />;
  }

  const { transactions, ...account } = accountData;

  return (
    <div className="space-y-8 px-5">
      <AccountInfo account={account} />
      <Suspense fallback={<Loader />}>
        <AccountChart transactions={transactions} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <TransactionTable transactions={transactions} />
      </Suspense>
    </div>
  );
};

export default AccountsPage;
