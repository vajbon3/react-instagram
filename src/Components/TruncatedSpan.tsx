import React from "react";

export function TruncatedSpan({text, maxLength}: { text: string, maxLength: number }) {
    const [isTruncated, setIsTruncated] = React.useState(true);
    const isTooLong: boolean = text.length > maxLength;
    return (
        <span>
            {isTooLong && isTruncated ? text.substring(0, maxLength) + "..." : text}
            {isTooLong && <button onClick={() => setIsTruncated(!isTruncated)} className={"p-0 ml-2 border-none bg-transparent text-primary"}>
                {isTruncated ? "See more" : "See less"}
            </button>}
        </span>
    );
}