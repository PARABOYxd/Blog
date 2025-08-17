
'use client';
import { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle?: any[];
    }
}

export default function AdSenseAd() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) { }
        }
    }, []);
    return (
        <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
            <ins className="adsbygoogle"
                style={{ display: 'block', width: '100%', height: '100%' }}
                data-ad-client="ca-pub-8722576979132394"
                data-ad-slot="1234567890"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
}
