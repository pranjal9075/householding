// Status flow configuration
export const BOOKING_STATUSES = {
    PENDING: 'pending',
    CONFIRMED: 'confirmed',
    IN_PROGRESS: 'in-progress',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled'
};

// Status flow transitions
export const STATUS_TRANSITIONS = {
    [BOOKING_STATUSES.PENDING]: [BOOKING_STATUSES.CONFIRMED, BOOKING_STATUSES.CANCELLED],
    [BOOKING_STATUSES.CONFIRMED]: [BOOKING_STATUSES.IN_PROGRESS, BOOKING_STATUSES.CANCELLED],
    [BOOKING_STATUSES.IN_PROGRESS]: [BOOKING_STATUSES.COMPLETED, BOOKING_STATUSES.CANCELLED],
    [BOOKING_STATUSES.COMPLETED]: [],
    [BOOKING_STATUSES.CANCELLED]: []
};

// Status display configuration
export const STATUS_CONFIG = {
    [BOOKING_STATUSES.PENDING]: {
        label: 'Pending',
        color: 'yellow',
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-800',
        description: 'Waiting for confirmation'
    },
    [BOOKING_STATUSES.CONFIRMED]: {
        label: 'Confirmed',
        color: 'blue',
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-800',
        description: 'Booking confirmed, technician assigned'
    },
    [BOOKING_STATUSES.IN_PROGRESS]: {
        label: 'In Progress',
        color: 'purple',
        bgColor: 'bg-purple-100',
        textColor: 'text-purple-800',
        description: 'Service is being performed'
    },
    [BOOKING_STATUSES.COMPLETED]: {
        label: 'Completed',
        color: 'green',
        bgColor: 'bg-green-100',
        textColor: 'text-green-800',
        description: 'Service completed successfully'
    },
    [BOOKING_STATUSES.CANCELLED]: {
        label: 'Cancelled',
        color: 'red',
        bgColor: 'bg-red-100',
        textColor: 'text-red-800',
        description: 'Booking has been cancelled'
    }
};

// Utility functions
export const getStatusConfig = (status) => {
    return STATUS_CONFIG[status] || STATUS_CONFIG[BOOKING_STATUSES.PENDING];
};

export const canTransitionTo = (currentStatus, targetStatus) => {
    const allowedTransitions = STATUS_TRANSITIONS[currentStatus] || [];
    return allowedTransitions.includes(targetStatus);
};

export const getNextPossibleStatuses = (currentStatus) => {
    return STATUS_TRANSITIONS[currentStatus] || [];
};

export const isStatusFinal = (status) => {
    return status === BOOKING_STATUSES.COMPLETED || status === BOOKING_STATUSES.CANCELLED;
};

export const getStatusProgress = (status) => {
    const statusOrder = [
        BOOKING_STATUSES.PENDING,
        BOOKING_STATUSES.CONFIRMED,
        BOOKING_STATUSES.IN_PROGRESS,
        BOOKING_STATUSES.COMPLETED
    ];
    
    const currentIndex = statusOrder.indexOf(status);
    if (currentIndex === -1) return 0;
    
    return ((currentIndex + 1) / statusOrder.length) * 100;
};

export const formatStatusForDisplay = (status) => {
    const config = getStatusConfig(status);
    return config.label;
};

export const getStatusIcon = (status) => {
    switch (status) {
        case BOOKING_STATUSES.PENDING:
            return '⏳';
        case BOOKING_STATUSES.CONFIRMED:
            return '✅';
        case BOOKING_STATUSES.IN_PROGRESS:
            return '🔧';
        case BOOKING_STATUSES.COMPLETED:
            return '🎉';
        case BOOKING_STATUSES.CANCELLED:
            return '❌';
        default:
            return '❓';
    }
};