'use client';

export default function Error({
                                  errorId,
                                  errors
                              }: {
    errorId: string,
    errors: errors
}) {
    return (
        <div id={errorId} aria-live="polite" aria-atomic="true">
            {errors &&
                errors.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                    </p>
                ))}
        </div>
    );
}
