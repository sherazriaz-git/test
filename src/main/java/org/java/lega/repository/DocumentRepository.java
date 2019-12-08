package org.java.lega.repository;
import org.java.lega.domain.Document;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Document entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {

    @Query("select document from Document document where document.creator.login = ?#{principal.username}")
    List<Document> findByCreatorIsCurrentUser();

}
