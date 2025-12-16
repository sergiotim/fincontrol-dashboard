import React from "react";
import type { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  colorClass: string;
  subtext: string;
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  icon: Icon,
  colorClass,
  subtext,
}) => (
  <div className="card border-0 shadow-sm h-100 hover-shadow transition-all">
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6
          className="text-muted text-uppercase mb-0 fw-bold"
          style={{ fontSize: "0.8rem" }}
        >
          {title}
        </h6>
        <div
          className={`p-2 rounded-circle bg-opacity-10 ${colorClass.replace(
            "text-",
            "bg-"
          )}`}
        >
          <Icon className={colorClass} size={20} />
        </div>
      </div>
      <h3 className="fw-bold mb-1">{value}</h3>
      <small className="text-muted">{subtext}</small>
    </div>
  </div>
);
