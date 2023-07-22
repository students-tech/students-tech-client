import Image from "next/image";

interface DashboardInterface {
    user: string
}

const Dashboard: React.FC<DashboardInterface> = ({ user }) => {
    return (
        <div>
            <div className="h-screen w-screen px-5">
                <div>
                    Welcome, {user}!
                </div>
            </div>
        </div>
    )
}

export default Dashboard
