"use client";

import { useEffect, useRef, useState } from "react";
import {
    UploadCloud,
    ImageIcon,
    FileText,
    Trash2,
    RefreshCw,
} from "lucide-react";
import { toast } from "sonner";

import {
    MAX_FILE_SIZE,
    ALLOWED_TYPES,
} from "@/app/constants/upload.constants";

interface ReceiptUploaderProps {
    file: File | null;
    onChange: (file: File | null) => void;
}

export default function ReceiptUploader({
    file,
    onChange,
}: ReceiptUploaderProps) {
    const [preview, setPreview] = useState<string | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!file) {
            setPreview(null);
            return;
        }

        if (file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);

            setPreview(url);

            return () => {
                URL.revokeObjectURL(url);
            };
        }

        setPreview(null);
    }, [file]);

    function validateFile(file: File): boolean {
        if (!ALLOWED_TYPES.includes(file.type)) {
            toast.error(
                "Only JPG, JPEG, PNG and PDF files are allowed.",
            );

            return false;
        }

        if (file.size > MAX_FILE_SIZE) {
            toast.error(
                "File size must not exceed 5 MB.",
            );

            return false;
        }

        return true;
    }

    function handleSelect(
        e: React.ChangeEvent<HTMLInputElement>,
    ) {
        const selected = e.target.files?.[0];

        if (!selected) {
            return;
        }

        if (!validateFile(selected)) {
            e.target.value = "";
            return;
        }

        onChange(selected);

        // allow selecting the same file again later
        e.target.value = "";
    }

    function removeFile() {
        onChange(null);

        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    return (
        <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">
                Payment Receipt
            </label>

            {!file && (
                <label
                    className="
                        flex
                        cursor-pointer
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border-2
                        border-dashed
                        border-slate-300
                        bg-slate-50
                        px-6
                        py-10
                        transition
                        hover:border-blue-500
                        hover:bg-blue-50
                    "
                >
                    <UploadCloud
                        size={40}
                        className="mb-3 text-blue-600"
                    />

                    <p className="text-base font-semibold text-slate-700">
                        Upload Receipt
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        JPG, PNG or PDF (Maximum 5MB)
                    </p>

                    <input
                        ref={inputRef}
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        className="hidden"
                        onChange={handleSelect}
                    />
                </label>
            )}

            {file && (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

                    {/* Preview */}

                    {preview ? (
                        <img
                            src={preview}
                            alt="Receipt Preview"
                            className="max-h-80 w-full object-contain bg-slate-100"
                        />
                    ) : (
                        <div className="flex items-center gap-3 p-6">
                            <FileText
                                size={42}
                                className="text-red-500"
                            />

                            <div className="min-w-0">
                                <p className="truncate font-medium text-slate-900">
                                    {file.name}
                                </p>

                                <p className="text-sm text-slate-500">
                                    PDF Document
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Footer */}

                    <div className="flex flex-col gap-3 border-t border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex min-w-0 items-center gap-2">
                            {preview ? (
                                <ImageIcon
                                    size={18}
                                    className="text-blue-600"
                                />
                            ) : (
                                <FileText
                                    size={18}
                                    className="text-red-500"
                                />
                            )}

                            <span className="truncate text-sm text-slate-600">
                                {file.name}
                            </span>
                        </div>

                        <div className="flex gap-2">

                            <label
                                className="
                                    inline-flex
                                    cursor-pointer
                                    items-center
                                    gap-2
                                    rounded-lg
                                    border
                                    border-slate-300
                                    px-3
                                    py-2
                                    text-sm
                                    font-medium
                                    transition
                                    hover:bg-slate-50
                                "
                            >
                                <RefreshCw size={16} />

                                Replace

                                <input
                                    ref={inputRef}
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.pdf"
                                    className="hidden"
                                    onChange={handleSelect}
                                />
                            </label>

                            <button
                                type="button"
                                onClick={removeFile}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    bg-red-50
                                    px-3
                                    py-2
                                    text-sm
                                    font-medium
                                    text-red-600
                                    transition
                                    hover:bg-red-100
                                "
                            >
                                <Trash2 size={16} />

                                Remove
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}