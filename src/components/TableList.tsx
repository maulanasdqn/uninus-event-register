import React from 'react';

interface Student {
    id: number;
    name: string;
    nim: number;
    prodi: string;
}

interface TableListProps {
    data: Student[];
}

const TableList: React.FC<TableListProps> = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border'>
                            ID
                        </th>
                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border'>
                            Nama
                        </th>
                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border'>
                            NIM
                        </th>
                        <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border'>
                            Prodi
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {data.map(student => (
                        <tr key={student.id}>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border'>{student.id}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border'>{student.name}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border'>{student.nim}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 border'>{student.prodi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default TableList;
