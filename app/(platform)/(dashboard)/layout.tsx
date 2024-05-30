import { Navabar } from "./_componenets/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full ">
            <Navabar />
            {children}
        </div>
    );
};
export default DashboardLayout;