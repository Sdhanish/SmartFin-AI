import { getUserAccounts } from "@/actions/dashboard";
import { getTransaction } from "@/actions/transaction";
import { defaultCategories } from "@/data/categories";
import AddTransactionForm from "../_components/transaction-form";

export const dynamic = "force-dynamic";

const AddTransactionPage = async ({ searchParams: asyncSearchParams }) => {
  const searchParams = await asyncSearchParams;
  const { edit: editId } = searchParams;

  const [accounts, initialData] = await Promise.all([
    getUserAccounts(),
    editId ? getTransaction(editId) : Promise.resolve(null),
  ]);

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title">
          {editId ? "Edit" : "Add"} Transaction
        </h1>
      </div>
      <AddTransactionForm
        accounts={accounts || []}
        categories={defaultCategories}
        editMode={Boolean(editId)}
        initialData={initialData}
      />
    </div>
  );
};

export default AddTransactionPage;
