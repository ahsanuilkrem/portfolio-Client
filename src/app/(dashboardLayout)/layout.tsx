import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode}>) => {
    return (
        <div className='flex'>
                <Sidebar />
                {children}
        </div>
    );
};

export default DashboardLayout;