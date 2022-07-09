import { useEffect, useState } from "react";
import { PageHeader } from "antd";

import { Publications, Details, Card } from "./components";
import { IPublication } from "./interfaces";
import { PublicationService } from "./publication.service";
import styles from "./publication.module.css";

export function PublicationsPage() {
  const [publications, setPublications] = useState<IPublication[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [details, setDetails] = useState<IPublication | null>(null);

  useEffect(() => {
    setLoading(true);

    PublicationService.find()
      .then(setPublications)
      .catch(alert)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.page}>
      <PageHeader title="Publications" backIcon={false} />

      <Publications
        publications={publications}
        loading={loading}
        onSelected={setDetails}
      />

      <Details open={!!details} onClose={() => setDetails(null)}>
        {details && <Card {...details} />}
      </Details>
    </div>
  );
}
