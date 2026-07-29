"use client";

import {
    ChangeEvent,
    DragEvent,
    useRef,
    useState,
} from "react";
import { Upload, Loader2, ImageIcon, X, Link2 } from "lucide-react";

import { fileService } from "@/app/services/adminServices/file.service";
import {
    UploadFolder,
    UploadFolders,
} from "@/app/constants/uploadFolders";

interface ImageUploadProps {
    label: string;
    value?: string;
    onChange: (url: string) => void;
    folder?: UploadFolder;
    error?: string;
    optional?: boolean;
}

export default function ImageUpload({
    label,
    value,
    folder = UploadFolders.ADVERTISEMENTS,
    onChange,
    error,
    optional,
}: ImageUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [showUrlField, setShowUrlField] = useState(false);

    async function uploadFile(file: File) {
        try {
            setUploading(true);
            const uploaded = await fileService.uploadFile(file, folder);
            onChange(uploaded.url);
        } catch (err) {
            console.error(err);
            alert("Image upload failed.");
        } finally {
            setUploading(false);
        }
    }

    function handleFileInput(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) uploadFile(file);
        e.target.value = "";
    }

    function handleDrop(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setDragActive(false);
        const file = e.dataTransfer.files?.[0];
        if (file) uploadFile(file);
    }

    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">
                    {label}
                    {optional && (
                        <span className="ml-1 font-normal text-slate-400">
                            (optional)
                        </span>
                    )}
                </label>

                {value && (
                    <button
                        type="button"
                        onClick={() => onChange("")}
                        className="flex items-center gap-1 text-xs font-medium text-slate-400 transition hover:text-red-500"
                    >
                        <X size={12} />
                        Remove
                    </button>
                )}
            </div>

            <input
                ref={inputRef}
                hidden
                type="file"
                accept="image/*"
                onChange={handleFileInput}
            />

            {/* Dropzone / preview — single source of truth on all screens */}
            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                onClick={() => !uploading && inputRef.current?.click()}
                className={`
                    relative flex h-40 w-full cursor-pointer items-center
                    justify-center overflow-hidden rounded-xl border-2
                    border-dashed transition
                    sm:h-48
                    ${dragActive ? "border-blue-400 bg-blue-50" : "border-slate-300 bg-slate-50"}
                    ${error ? "border-red-300" : ""}
                `}
            >
                {value ? (
                    <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={value}
                            alt="Uploaded"
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = "none";
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition hover:bg-black/40 hover:opacity-100">
                            <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                                <Upload size={13} />
                                Replace image
                            </span>
                        </div>
                    </>
                ) : uploading ? (
                    <div className="flex flex-col items-center gap-2 text-slate-400">
                        <Loader2 size={22} className="animate-spin" />
                        <span className="text-xs font-medium">Uploading...</span>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-1.5 px-4 text-center text-slate-400">
                        <ImageIcon size={26} className="text-slate-300" />
                        <p className="text-xs font-medium text-slate-500">
                            Tap to upload
                        </p>
                        <p className="hidden text-xs text-slate-400 sm:block">
                            or drag and drop an image
                        </p>
                    </div>
                )}
            </div>

            <button
                type="button"
                onClick={() => setShowUrlField((v) => !v)}
                className="mt-2 flex items-center gap-1.5 text-xs font-medium text-blue-600 transition hover:text-blue-700"
            >
                <Link2 size={12} />
                {showUrlField ? "Hide URL field" : "Paste an image URL instead"}
            </button>

            {showUrlField && (
                <input
                    type="text"
                    value={value ?? ""}
                    placeholder="https://..."
                    onChange={(e) => onChange(e.target.value)}
                    className="
                        mt-2 h-10 w-full rounded-lg border border-slate-300
                        px-3 text-sm outline-none transition
                        focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                    "
                />
            )}

            {error && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}