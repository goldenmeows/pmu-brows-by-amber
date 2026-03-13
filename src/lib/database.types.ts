export interface Database {
  public: {
    Tables: {
      gallery_items: {
        Row: {
          id: string;
          image_url: string;
          title: string;
          category: string;
          display_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['gallery_items']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['gallery_items']['Insert']>;
      };
      testimonials: {
        Row: {
          id: string;
          client_name: string;
          rating: number;
          comment: string;
          service: string;
          is_featured: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['testimonials']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['testimonials']['Insert']>;
      };
      bookings: {
        Row: {
          id: string;
          client_name: string;
          email: string;
          phone: string;
          service: string;
          preferred_date: string;
          message: string;
          status: string;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['bookings']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['bookings']['Insert']>;
      };
    };
  };
}
