import React, { useState } from "react";

export const JsonModify = () => {
    const [keys, setKeys] = useState<string[]>([]);
    const [data, setData] = useState<any[]>([]);
    const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = (evt) => {
                const data = JSON.parse(evt.target?.result as string)
                setData(data);
                const keys = new Set<string>();
                data.forEach((item: any) => {
                    Object.keys(item).forEach(key => keys.add(key));
                })
                setKeys(Array.from(keys));
                console.log(Array.from(keys));
            };
        }
    };

    return (
        <div>
            <h1>JsonModify</h1>
        </div>
    );
};