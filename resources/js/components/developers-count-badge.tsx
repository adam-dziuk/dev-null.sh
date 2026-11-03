import { usePage } from '@inertiajs/react';
import { formatCount, formatExactCount } from '@/lib/numbers';

/**
 * How many developers are on /dev/null, beside the logo. The count is rounded
 * down on the server, so "1,000+" stays true until the next round number.
 * The logo links name themselves, so they point aria-describedby at its id
 * while it is shown.
 */
export default function DevelopersCountBadge({
    id,
    className,
}: {
    id: string;
    className?: string;
}) {
    const { developersCount } = usePage().props;

    if (developersCount === 0) {
        return null;
    }

    return (
        <span
            id={id}
            title={`${formatExactCount(developersCount)}+ developers on /dev/null`}
            className={className}
        >
            <span className="inline-block rounded-sm bg-muted px-1 font-mono text-[10px] leading-4 whitespace-nowrap text-muted-foreground tabular-nums">
                <span aria-hidden="true">{formatCount(developersCount)}+</span>
                <span className="sr-only">
                    {formatExactCount(developersCount)}+ developers
                </span>
            </span>
        </span>
    );
}
